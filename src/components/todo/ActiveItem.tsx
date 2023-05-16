const ActiveItem = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span className="active_colored" key={index}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return text;
};

export default ActiveItem;
