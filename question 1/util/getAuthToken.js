export const getAuthToken = async () => {
  const data = {
    "companyName": "goMart",
    "clientID": "4e21717a-5655-4a97-a127-6398b0853325",
    "clientSecret": "IpufgyivqcLbRKwK",
    "ownerName": "Ishwar Kumar Mishra",
    "ownerEmail": "125158020@sastra.ac.in",
    "rollNo": "125158020"
  };

  const res = await fetch('http://20.244.56.144/test/auth', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })

  const resData = await res.json();

  return resData;
}