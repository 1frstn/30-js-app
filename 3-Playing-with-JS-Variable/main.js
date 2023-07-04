const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      console.log("SUFFIC>>>>>",suffix);
      console.log("THISS>>>",this);
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      console.log(document.documentElement);

    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));