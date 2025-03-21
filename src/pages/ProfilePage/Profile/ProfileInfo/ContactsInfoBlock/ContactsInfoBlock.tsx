import React from 'react';
import ContactBlock from './ContactBlock/ContactBlock';

const ContactsInfoBlock = ({ fullContactsArray }) => {
  const renderContacts = (data: any) => {
    const sortData = Object.entries(data);
    let createdContactBlock = [];
    sortData.map((item) => {
      if (item[1]) {
        // @ts-ignore
        createdContactBlock.push(<ContactBlock contactInfo={item} key={item[0]} />);
      }
    });

    return createdContactBlock;
  };

  return <div>{renderContacts(fullContactsArray)}</div>;
};

export default ContactsInfoBlock;
