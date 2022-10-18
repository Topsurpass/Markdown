 import {configureStore} from '@reduxjs/toolkit';
import reduceMarkdown from './sliceMarkRed';

export const store = configureStore({
    reducer: {
        previewThis:reduceMarkdown,
    }
})
