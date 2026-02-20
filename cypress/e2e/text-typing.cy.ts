import { mount } from 'cypress/react18';
import { TextTyping } from '../../lib/TextTyping';
import '../../lib/TextTyping.css';

describe('TextTyping Component', () => {
  beforeEach(() => {
    cy.viewport(800, 600);
  });

  it('renders the component with text', () => {
    mount(<TextTyping text="Hello" speed={100} />);
    cy.get('.text-typing').should('exist');
    cy.get('.text-typing').should('have.attr', 'data-text', 'Hello');
  });

  it('types text character by character', () => {
    mount(<TextTyping text="Hi" speed={50} />);
    cy.wait(100);
    cy.get('.text-typing').should('contain', 'H');
    cy.wait(100);
    cy.get('.text-typing').should('contain', 'Hi');
  });

  it('respects showBlink prop', () => {
    mount(<TextTyping text="Test" showBlink speed={1000} />);
    cy.get('.text-typing').should('not.have.class', 'no-blink');

    mount(<TextTyping text="Test" showBlink={false} speed={1000} />);
    cy.get('.text-typing').should('have.class', 'no-blink');
  });

  it('applies custom colors', () => {
    mount(<TextTyping text="Test" colorText="#ff0000" colorTyping="#00ff00" speed={1000} />);
    cy.get('.text-typing').should('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it('applies custom font size', () => {
    mount(<TextTyping text="Test" fontSize="2em" speed={1000} />);
    cy.get('.text-typing').should('have.css', 'font-size', '32px');
  });

  it('accepts custom component type', () => {
    mount(<TextTyping text="Test" component="h1" speed={1000} />);
    cy.get('h1.text-typing').should('exist');
  });

  it('accepts className prop', () => {
    mount(<TextTyping text="Test" className="custom-class" speed={1000} />);
    cy.get('.text-typing').should('have.class', 'custom-class');
  });

  it('calls onComplete when typing finishes', () => {
    const onComplete = cy.stub().as('onComplete');
    mount(<TextTyping text="AB" speed={30} onComplete={onComplete} />);
    cy.wait(200);
    cy.get('@onComplete').should('have.been.called');
  });

  it('resets when text prop changes', () => {
    mount(<TextTyping text="First" speed={50} />);
    cy.wait(100);
    cy.get('.text-typing').should('contain', 'F');

    mount(<TextTyping text="Second" speed={50} />);
    cy.wait(100);
    cy.get('.text-typing').should('contain', 'S');
    cy.get('.text-typing').should('not.contain', 'F');
  });
});
