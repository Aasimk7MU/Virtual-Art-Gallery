import Header from "./Header";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className="containter flex flex-col mt-2 gap-2 bg-gray-400">
      <div className="heading">
        <Header verticalAlign={"center"} />
        <p className="font-cormorant text-2xl px-4 text-center">
          React Art Gallery © 2023. All rights reserved.
        </p>
      </div>
      <ul className="font-cormorant flex gap-3 flex-row justify-center text-xl font-bold">
        <li>
          <a
            className="hover:text-fuchsia-300"
            href="https://github.com/shreyas-078"
            target="_blank"
            rel="noreferrer"
          >
            GitHub |
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-800"
            href="https://www.linkedin.com/in/shreyas-salankimatt-83588a260/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn |
          </a>
        </li>
        <li>
          <a
            className="hover:text-"
            href="https://twitter.com/Aasimk_26"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
