import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';

const InfoUser = () => {
  const fakeUserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: '123-456-7890',
  };

  return (
    <View style={{ padding: 16 }}>
      <Avatar.Text size={100} label="JD" />
      <Card>
        <Card.Content>
          <Title>{fakeUserData.name}</Title>
          <Paragraph>Email: {fakeUserData.email}</Paragraph>
          <Paragraph>Role: {fakeUserData.role}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

export default InfoUser;
