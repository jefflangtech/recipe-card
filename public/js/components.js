class RecipeCard extends HTMLElement {
  constructor() {
    super();
    this.template = document.createElement("template");
    this.template.innerHTML = `
      <h2 id="card-title"></h2>
      <div id="card-body">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true));
  }

  set content({ title, list, ordered }) {
    this.querySelector('#card-title').textContent = title;
    const body = this.querySelector('#card-body');

    const lsType = ordered ? 'ol' : 'ul';

    const ls = document.createElement(lsType);
    list.forEach(item => {
      const li = document.createElement('li');
      if(item.label) {
        const span = document.createElement('span');
        span.classList.add('bold');
        span.textContent = item.label;
        li.appendChild(span);
        item.content = ': ' + item.content;
      }
      li.append(item.content);
      ls.appendChild(li);
    });

    body.innerHTML = '';
    body.appendChild(ls);
  }
}

customElements.define('recipe-card', RecipeCard);