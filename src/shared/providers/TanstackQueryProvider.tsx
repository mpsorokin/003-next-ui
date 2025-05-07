'use client'

import {PropsWithChildren, useState} from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";

export function TanstackQueryProvider({children}: PropsWithChildren<unknown>) {
    const [client] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    }));
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}