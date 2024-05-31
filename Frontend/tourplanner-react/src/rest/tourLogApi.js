const baseUrl = 'http://localhost:8080/tourlog';

const createTourlog = async (data) => {
    const response = await fetch(`${baseUrl}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to create tourlog');
    }
  
    return await response.json();
  };

const getAllTourlogs = async (id) => {
    const response = await fetch(`${baseUrl}/get/tour/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });
  
    if (!response.ok) {
      throw new Error('Failed to get tourlog');
    }
  
    return await response.json();
  };

  const deleteTourLog = async (id) => {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete tourlog');
    }
  
    return await response.json();
  };

  const updateTourLog = async (id, data) => {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update tourlog');
    }
  
    return await response.json();
  };
  export {createTourlog, getAllTourlogs, deleteTourLog, updateTourLog};