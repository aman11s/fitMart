import { useEffect } from "react";

export const useDocumentTitle = (title) => {
  const documentTitle = title;
  useEffect(() => {
    document.title = `${documentTitle} | fitMart`;
  }, [documentTitle]);

  return { documentTitle };
};
