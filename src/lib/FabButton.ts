const LABEL = "label";
export class FabButton extends HTMLElement {
  private button: HTMLButtonElement;
  private labelElement: HTMLDivElement;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.button = document.createElement("button");
    this.labelElement = document.createElement("div");
    this.labelElement.textContent = this.getAttribute(LABEL);
    this.button.appendChild(this.labelElement);
    shadow.appendChild(this.button);
    this.button.onclick = (e) =>
      this.dispatchEvent(new CustomEvent("onClick", e));
  }
  static get observedAttributes() {
    return [LABEL];
  }

  connectedCallback() {}

  attributeChangedCallback(label: string, oldValue: string, newValue: string) {
    switch (label) {
      case LABEL:
        this.labelElement.textContent = newValue;
    }
  }
}

customElements.define("fab-button", FabButton);
