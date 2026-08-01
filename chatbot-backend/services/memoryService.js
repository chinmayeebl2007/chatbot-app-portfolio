const conversations = new Map();

const MAX_MESSAGES = 10;

export function getConversation(sessionId) {
  if (!conversations.has(sessionId)) {
    conversations.set(sessionId, []);
  }

  return conversations.get(sessionId);
}

export function addMessage(sessionId, role, content) {
  const conversation = getConversation(sessionId);

  conversation.push({
    role,
    content,
  });

  if (conversation.length > MAX_MESSAGES) {
    conversation.shift();
  }
}

export function buildConversationContext(sessionId) {
  const conversation = getConversation(sessionId);

  if (conversation.length === 0) {
    return "";
  }

  let context = "\nConversation History:\n\n";

  for (const message of conversation) {
    context += `${message.role.toUpperCase()}:\n${message.content}\n\n`;
  }

  return context;
}

export function clearConversation(sessionId) {
  conversations.delete(sessionId);
}