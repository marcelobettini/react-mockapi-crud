export const getAllUsers = async () => {
  const controller = new AbortController();
  const signal = controller.signal;
  try {
    const res = await fetch(
      "https://647a6c1bd2e5b6101db05747.mockapi.io/users",
      { signal } //pass the signal to fetch request
    );
    if (!res.ok) throw new Error("Response not ok");
    const data = await res.json();
    return data;
  } catch (err) {
    controller.abort();
    throw err; //Propagate the error to the calling code
  }
};
