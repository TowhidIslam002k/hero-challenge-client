import { useEffect } from 'react';

const useSetTitle = title => {
    useEffect(()=> {
        document.title = `${title} - Best Test`;
    },[title])
};

export default useSetTitle;