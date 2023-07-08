export const getAllUsers = async () => {
  try {
    const res = await fetch(
      "https://647a6c1bd2e5b6101db05747.mockapi.io/users"
    );
    if (!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err; //Propagate the error to the calling code
  }
};
export const deleteUserById = async id => {
  try {
    const res = await fetch(
      `https://647a6c1bd2e5b6101db05747.mockapi.io/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      }
    );
    if (!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err; //Propagate the error to the calling code
  }
};
export const updateUserById = async (id, user) => {
  try {
    const res = await fetch(
      `https://647a6c1bd2e5b6101db05747.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    if (!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err; //Propagate the error to the calling code
  }
};
