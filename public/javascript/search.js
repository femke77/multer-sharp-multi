const handleSearchZip = async () => {
  let zip = document.querySelector("input").value.trim();

  await fetch(`/api/places/${zip}/${location}`, {
    method: "GET",
  });

  document.querySelector("input").value = "";
  console.log("success");
};

const handleSearchLatLng = async () => {
  if (!navigator.geolocation) {
    alert(`Your browser doesn't support Geolocation`);
  } else {
    console.log("OK!");
  }

  navigator.geolocation.getCurrentPosition(success, error);

  async function success(position) {
    const zip = null;

    const { latitude, longitude } = position.coords;
    const location = latitude + "," + longitude;

    await fetch(`/api/places/${zip}/${location}`, {
      method: "GET",
    });
    console.log("success");
  }

  function error() {
    console.log("something failed");
  }
};

document.querySelector("#curr").addEventListener("click", handleSearchLatLng);
document.querySelector("button").addEventListener("click", handleSearchZip);
