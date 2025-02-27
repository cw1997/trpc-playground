import {createTRPCContext} from "@trpc/tanstack-react-query";
import type {AppRouter} from "@trpc-playground/api";

export const { useTRPC, TRPCProvider } = createTRPCContext<AppRouter>()