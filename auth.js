const crypto = require('crypto');

// Simulação de banco de dados de usuários
const users = {
  mentor: {
    id: 1,
    email: 'mentor@forjado.com',
    password: hashPassword('senha123'),
    name: 'Mentor Forjado',
    role: 'mentor'
  }
};

const sessions = {};

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

function login(email, password) {
  const user = Object.values(users).find(u => u.email === email);
  
  if (!user || user.password !== hashPassword(password)) {
    return { success: false, message: 'Email ou senha incorretos' };
  }

  const token = generateToken();
  sessions[token] = {
    userId: user.id,
    email: user.email,
    role: user.role,
    createdAt: new Date()
  };

  return {
    success: true,
    token,
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  };
}

function verifyToken(token) {
  return sessions[token] || null;
}

function logout(token) {
  delete sessions[token];
  return { success: true };
}

function registerUser(email, password, name, role = 'participant') {
  if (Object.values(users).some(u => u.email === email)) {
    return { success: false, message: 'Email já registrado' };
  }

  const userId = Object.keys(users).length + 1;
  users[email] = {
    id: userId,
    email,
    password: hashPassword(password),
    name,
    role
  };

  return { success: true, userId };
}

module.exports = {
  login,
  logout,
  verifyToken,
  registerUser,
  hashPassword,
  generateToken
};
