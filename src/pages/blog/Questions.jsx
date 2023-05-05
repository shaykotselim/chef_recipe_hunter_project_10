import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Questions() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
            1. Tell us differences between uncontrolled and controlled components.?
        </AccordionHeader>
        <AccordionBody>
         
         Uncontrolled components are typically components that have no direct communication or interaction with other parts of the application, and do not enforce any specific behavior or constraints on the system. Examples of uncontrolled components include simple HTML elements like div or input, or standalone JavaScript functions.

         On the other hand, controlled components are components that are tightly integrated into the applications data flow and state management systems. They often manage their own state, and communicate with other components through well-defined interfaces. Examples of controlled components include React components that are connected to a Redux store, or form components that enforce validation and submission rules.

         The main difference between these two types of components is the level of control and structure they provide to the overall system. While uncontrolled components are more flexible and can be used in a variety of contexts, controlled components offer more predictability and maintainability by enforcing a consistent structure and behavior across the application.
         
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          2. How to validate React props using PropTypes?
        </AccordionHeader>
        <AccordionBody>
        PropTypes is a built-in library in React that allows you to validate the type and shape of props passed to a component. To use PropTypes, you first need to import it from the 'prop-types' package. Then, you can define the expected type and shape of each prop by setting the propTypes object on the component. For example, to validate that a prop called "name" is a string, you would use PropTypes.string as the value of "propTypes.name". If the prop doesnt match the expected type or is missing, an error will be logged in the console. This helps catch bugs early and improve code quality.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          3. Tell us the difference between nodejs and express js.?
        </AccordionHeader>
        <AccordionBody>
        Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript on the server-side. It provides a set of built-in modules that can be used to perform various operations such as reading and writing files, creating web servers, and interacting with databases. With Node.js, developers can build scalable network applications, real-time chat applications, and more.

        Express.js, on the other hand, is a web application framework that is built on top of Node.js. It provides a set of tools and features that simplify the process of creating web applications and APIs. It includes features such as routing, middleware support, and template engines, making it easier to build and manage complex web applications. Express.js is known for its simplicity and flexibility, making it a popular choice for web development projects. While Node.js provides the foundation for running JavaScript on the server-side, Express.js adds the tools and features that make it easier to build web applications. 
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
         4. What is a custom hook, and why will you create a custom hook?
        </AccordionHeader>
        <AccordionBody>
        components, you can extract that code into a custom hook and use it across those components, instead of duplicating the same code. Custom hooks can also help improve the readability and maintainability of your code, as they allow you to abstract away complex logic into smaller, more manageable pieces.
        In addition, custom hooks can be used to encapsulate external functionality, such as APIs or libraries, and provide a simple, reusable interface to your components. This can help simplify your components and make them easier to test and maintain. Overall, custom hooks are a powerful tool in React that can help you write more efficient, reusable code.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}