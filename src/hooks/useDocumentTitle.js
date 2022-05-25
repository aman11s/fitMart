import { useEffect, useState } from "react";

export const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);
  useEffect(() => {
    document.title = `${documentTitle} | fitMart`;
  }, [documentTitle]);

  return { documentTitle, setDocumentTitle };
};
