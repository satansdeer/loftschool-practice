import React from 'react'
import Card from "./blocks/Card";

export const PersonCard = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Image
          alt="person avatar"
          src="www.example.com/person-avatar.jpg"
        />
        <Card.Title>Иван Иванов</Card.Title>
      </Card.Header>
      <Card.Text>Жизнь и приключения Ивана Иванова.</Card.Text>
    </Card>
  );
};