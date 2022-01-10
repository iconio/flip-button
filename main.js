class FlipButton extends HTMLElement {
    ICON;
    LABEL;
    ID;

    constructor() {
        super();
        this.ICON = this.getAttribute('icon');
        this.LABEL = this.getAttribute('label');
        this.ID = '#' + this.getAttribute('id');
        this.shadow = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                .button {
                    width: 50px;
                    height: 50px;
                    background: #FFCC00;
                    display: block;
                }
                
                .img-responsive {
                    width: 50%;
                    height: auto;
                }
                
                .fb:before,
                .fb-bottom:before, {
                  font-family: 'Oswald', sans-serif;
                  color: #FFF;
                  font-weight: 300;
                  font-size: 18px;
                }
                /* General button style (reset) */
                .btn {
                  border: none;
                  font-family: inherit;
                  font-size: inherit;
                  color: inherit;
                  background: none;
                  cursor: pointer;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  /* \tfont-weight: 700; */
                  outline: none;
                  position: relative;
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                .btn:after {
                  content: '';
                  position: absolute;
                  z-index: -1;
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                .fb:before {
                  margin: 40px 0 0 0;
                  content: '${this.LABEL}';
                }

                .btn-5 {
                  height: 121px;
                  width: 24%;
                  max-width: 130px;
                  overflow: hidden;
                  -webkit-backface-visibility: hidden;
                  -moz-backface-visibility: hidden;
                  backface-visibility: hidden;
                }
                .btn-5:active {
                  top: 2px;
                }
                .btn-5 span {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  -webkit-transition: all 0.3s;
                  -webkit-backface-visibility: hidden;
                  -moz-transition: all 0.3s;
                  -moz-backface-visibility: hidden;
                  transition: all 0.3s;
                  backface-visibility: hidden;
                }
                .btn-5:before {
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  /*line-height: 2.5;*/
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                .btn-5:active:before {
                  color: #703b87;
                }
                /* Button 5a */
                .btn-5a:hover span {
                  -webkit-transform: translateY(300%);
                  -moz-transform: translateY(300%);
                  -ms-transform: translateY(300%);
                  transform: translateY(300%);
                }
                .btn-5a:before {
                  left: 0;
                  top: -100%;
                }
                .btn-5a:hover:before {
                  top: 0;
                }
                /* BOTTOM */
                .btn-bottom {
                  border: none;
                  font-family: inherit;
                  font-size: inherit;
                  color: inherit;
                  background: none;
                  cursor: pointer;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  /* \tfont-weight: 700; */
                  outline: none;
                  position: relative;
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                .btn-bottom:after {
                  content: '';
                  position: absolute;
                  z-index: -1;
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                
                .btn-5-bottom {
                  height: 90px;
                  width: 130px;
                  overflow: hidden;
                  -webkit-backface-visibility: hidden;
                  -moz-backface-visibility: hidden;
                  backface-visibility: hidden;
                }
                .btn-5-bottom:active {
                  top: 2px;
                }
                .btn-5-bottom span {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  -webkit-transition: all 0.3s;
                  -webkit-backface-visibility: hidden;
                  -moz-transition: all 0.3s;
                  -moz-backface-visibility: hidden;
                  transition: all 0.3s;
                  backface-visibility: hidden;
                }
                .btn-5-bottom:before {
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  /*line-height: 2.5;*/
                  -webkit-transition: all 0.3s;
                  -moz-transition: all 0.3s;
                  transition: all 0.3s;
                }
                .btn-5-bottom:active:before {
                  color: #703b87;
                }
                /* Button 5a */
                .btn-5a-bottom:hover span {
                  -webkit-transform: translateY(300%);
                  -moz-transform: translateY(300%);
                  -ms-transform: translateY(300%);
                  transform: translateY(300%);
                }
                .btn-5a-bottom:before {
                  left: 0;
                  top: -100%;
                }
                .btn-5a-bottom:hover:before {
                  top: 0;
                }
            </style>
            <button class="btn btn-5 btn-5a fb">
			    <span>
					<img src="${this.ICON}" class="menu-btn-align img-responsive" alt="${this.LABEL}" />
				</span>
			</button>
        `;
    }
}

customElements.define('flip-button', FlipButton)
