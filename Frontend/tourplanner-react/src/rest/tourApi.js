
const baseUrl = 'http://localhost:8080/tour';


// Im header geben wir an, dass der endpoint json daten zu erwarten hat bei dem request
const createTour = async (data) => {
    const response = await fetch(`${baseUrl}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to create tour');
    }
  
    return await response.json();
  };
  
  const getTour = async (id) => {
    const response = await fetch(`${baseUrl}/get/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });
  
    if (!response.ok) {
      throw new Error('Failed to get tour');
    }
  
    return await response.json();
  };

    
  const getAllTours = async () => {
    const response = await fetch(`${baseUrl}/get/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });
  
    if (!response.ok) {
      throw new Error('Failed to get tour');
    }
  
    return await response.json();
  };

  const updateTour = async (id, data) => {
    const response = await fetch(`${baseUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    if (!response.ok) {
      throw new Error('Failed to update tour');
    }
  
    return await response.json();
  };

  const deleteTour = async (id) => {
    const response = await fetch(`${baseUrl}/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    });
  
    if (!response.ok) {
      throw new Error('Failed to delete tour');
    }
  
    return await response.json();
  };
  
  export { createTour, getTour, updateTour, deleteTour, getAllTours };
  