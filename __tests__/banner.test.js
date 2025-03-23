test("should update the banner background image when a new option is selected", () => {
  // Mock the banner and dropdown elements
  document.body.innerHTML = `
      <div id="banner"></div>
      <select id="bg-select">
          <option value="">Choose...</option>
          <option value="https://picsum.photos/id/5/1920/300.jpg">Tech</option>
          <option value="https://picsum.photos/id/28/1920/300.jpg">Nature</option>
          <option value="https://picsum.photos/id/158/1920/300.jpg">Entertainment</option>
          <option value="https://picsum.photos/id/237/1920/300.jpg">Pets</option>
      </select>
  `;

  // Get the elements
  const banner = document.getElementById("banner");
  const select = document.getElementById("bg-select");

  // Simulate selecting different options
  const imageOptions = [
      "https://picsum.photos/id/5/1920/300.jpg",
      "https://picsum.photos/id/28/1920/300.jpg",
      "https://picsum.photos/id/158/1920/300.jpg",
      "https://picsum.photos/id/237/1920/300.jpg"
  ];

  imageOptions.forEach(imageUrl => {
      // Simulate changing the dropdown selection
      select.value = imageUrl;
      select.dispatchEvent(new Event("change")); // Trigger the event

      // Expect the banner's background image to be updated correctly
      expect(banner.style.backgroundImage).toBe(`url("${imageUrl}")`);
  });
});