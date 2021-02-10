
import React, { useState, useEffect } from 'react';
import { Modal, Button, message } from 'antd';
import API from '../../../utils/API';
import Selection from './Selection';


export default function ModalList(props) {

  const [selectId, setSelectId] = useState('');
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [cleanerData, setCleanerData] = useState([]);

  useEffect(() => {
    loadCleaners()
  }, []);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const { jobId, getJobData } = props
    API.addJobToCleaner(selectId.id, jobId)
      .then(res => {
        message.success('Assigned')
        API.updateJob(jobId, { assigned: true })
          .then(res =>
            setVisible(false)
          )
          .catch(err => {
            console.log(err)
          })
        getJobData()
      }
        
      )
      .catch(err => {
        console.log(err)
      })
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  function loadCleaners() {
    API.getCleaners()
      .then(res => {
        setCleanerData(res.data)
      })
  }
  function handleSelectChange(selected) {
    console.log(selected)
    setSelectId({
      id: selected.key,
    })
  }

  return (
    <>
      <Button type="link" onClick={showModal}>
        Assign
      </Button>
      <Modal
        title="Cleaner List"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Assign"
        cancelText="Cancel"
      >
        <Selection
          cleanerList={cleanerData}
          handleSelectChange={handleSelectChange}
        />
      </Modal>
    </>
  );
}
