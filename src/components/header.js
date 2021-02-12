const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let header = document.createElement('div');
  let dateElement = document.createElement('span');
  let titleElement = document.createElement('h1');
  let tempElement = document.createElement('span');

  header.className = "header";
  dateElement.className = "date";
  tempElement.classname = "temp";

  header.appendChild(dateElement);
  header.appendChild(titleElement);
  header.appendChild(tempElement);

  dateElement.textContent = date;
  titleElement.textContent = title;
  tempElement.textContent = temp;

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let entry = document.querySelector(selector);
  entry.appendChild(Header("Snowy Morning", "Feb. 12, 2020", "30F"))
}

export { Header, headerAppender }
