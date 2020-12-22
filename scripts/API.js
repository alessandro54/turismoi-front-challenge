const fetchTours = async () =>{
  const response = await fetch(`https://api.turismoi.com/api/tours?page%5Bpage%5D=1&page%5Bper_page%5D=10`, {
    method: "GET",
    headers: {
      "Content-Type":"application/vnd.api+json",
      "accept":"application/vnd.api+json",
      "Accept-Search-Filters":"yes",
      "Authorization": PUBLIC_TOKEN
    }
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error(response.toString())
  }
};

export {fetchTours}