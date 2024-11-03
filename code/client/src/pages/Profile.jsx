import React, { useState, useEffect } from 'react';
import { Form, Input, Table, Typography, Card } from 'antd';
import CardTableProfile from '../Component/cardTableProfile';
import LanguageSelector from '../Component/LanguageSelector';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const Profile = () => {
  const {t} = useTranslation();
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [Guides, setGuides] = useState([]);

  useEffect(() => {
    setProfile({ firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', id: 1, likedGuides: [1], savedGuides: [2] });

    setGuides([
      { key: '1', title: 'Guide 1', description: 'This is my first guide', id: 1, author: { id: 1 } },
      { key: '2', title: 'Guide 2', description: 'This is my second guide', id: 2, author: { id: 1 } },
    ]);
  }, []);

  const columns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Description', dataIndex: 'description', key: 'description' }
  ];

  return (
    <div className='w-full h-full flex flex-col items-center justify-center pt-10 space-y-10'>
      <Card
        bordered
        title={t("pages.profile.title")}
        className='w-4/5'
      >
        <Form layout="vertical">
          <Form.Item label={t("pages.profile.firstname")}>
            <Input value={profile.firstName} readOnly />
          </Form.Item>
          <Form.Item label={t("pages.profile.lastname")}>
            <Input value={profile.lastName} readOnly />
          </Form.Item>
          <Form.Item label={t("pages.profile.email")}>
            <Input value={profile.email} readOnly />
          </Form.Item>
          <LanguageSelector/>
        </Form>
      </Card>

      <CardTableProfile Guides={Guides} currentUser={profile} />
    </div>
  );
};

export default Profile;