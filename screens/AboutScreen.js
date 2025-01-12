import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';
import Mission from './Mission';
import partners from '../shared/partners';  // Assuming partners.js exists

const AboutScreen = () => {
  const [communityPartners, setCommunityPartners] = useState([]);

  useEffect(() => {
    setCommunityPartners(partners);  // Populate state with partners data
  }, []);

  return (
    <ScrollView>
      <Mission />
      <Card>
        <Card.Title>Community Partners</Card.Title>
        <Card.Divider />
        {communityPartners.map((partner) => (
          <ListItem key={partner.id}>
            <Avatar rounded source={{ uri: partner.image }} />
            <ListItem.Content>
              <ListItem.Title>{partner.name}</ListItem.Title>
              <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
    </ScrollView>
  );
};

export default AboutScreen;
