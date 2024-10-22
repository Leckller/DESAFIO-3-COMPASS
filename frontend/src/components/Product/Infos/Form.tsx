function Form() {
  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <section>
        <button>-</button>
        <h4>1</h4>
        <button>+</button>
      </section>
      <button>Add to cart</button>
      <button>+ Compare</button>
    </form>
  );
}

export default Form;
