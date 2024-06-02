'use client';

import React, { useState } from 'react';
import { sdk } from '@/lib/client';
import styles from '../app/styles/CreateListForm.module.css';
import { EMAIL } from '@/constants';



interface CreateListFormProps {
  onListCreated: () => void;
}

const CreateListForm: React.FC<CreateListFormProps> = ({ onListCreated }) => {
  const [listName, setListName] = useState('');
  const [error, setError] = useState('');

  const handleCreateList = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await sdk.CreateList({ input: { name: listName, email: EMAIL } });
      setListName('');
      onListCreated(); 
    } catch (error) {
      console.error('Failed to create list:', error);
      setError('Failed to create list. Please try again.');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleCreateList}>
      <input
        type="text"
        placeholder="List Name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        required
      />
      <button type="submit">Create List</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default CreateListForm;
