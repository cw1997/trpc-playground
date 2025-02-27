import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    // return ctx.db.select().from(schema.post).orderBy(desc(schema.post.id));
    return {hello: 'world'};
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return {hello: 'world'};
    }),

  create: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(({ ctx, input }) => {
      return {id: 1};
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return {};
  }),
} satisfies TRPCRouterRecord;
