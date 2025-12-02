export default function AboutUsPage() {
  return (
    <section class="container my-5 py-5" style={{ height: "80vh" }}>
      <div class="row g-4 align-items-center">
        <div class="col-md-6">
          <h2 class="text-light mb-4">About Us</h2>
          <p class="text-light">
            Welcome to our store! We are passionate about bringing you
            high-quality products at the best prices. Our mission is to make
            online shopping simple, reliable, and enjoyable for everyone.
          </p>
          <p class="text-light">
            Every product in our catalog is carefully selected to ensure
            excellent value and satisfaction. Whether you're looking for the
            latest trends or everyday essentials, we’re here to help you find
            exactly what you need.
          </p>
          <p class="text-light">
            Thank you for choosing us — your trust is what motivates us every
            day.
          </p>
        </div>

        <div class="col-md-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
            class="img-fluid rounded-4 shadow"
            alt="About Us"
          />
        </div>
      </div>
    </section>
  );
}
