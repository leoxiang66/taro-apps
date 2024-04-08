// MessageComponent.tsx
import React from 'react';

interface MessageComponentProps {
  message: string;
}

const MessageComponent: React.FC<MessageComponentProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default MessageComponent;
