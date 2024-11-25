import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export const User = {
  clerkId: v.string(), // Clerk ID
  email: v.string(), // User's email address
  imageUrl: v.optional(v.string()), // Optional image URL
  first_name: v.optional(v.string()), // Optional first name
  last_name: v.optional(v.string()), // Optional last name
  username: v.optional(v.string()), // Optional username
  pushToken: v.optional(v.string()), // Optional push token
};

export const Task = {
  userId: v.id("users"), // Foreign key to users table
  title: v.string(), // Title of the task
  description: v.optional(v.string()), // Optional description
  isCompleted: v.boolean(), // Task completion status
  dueDate: v.optional(v.string()), // Store date as ISO 8601 string
  createdAt: v.string(), // Timestamp for creation in ISO 8601
  updatedAt: v.string(), // Timestamp for last update in ISO 8601
  priority: v.optional(
    v.union(v.literal("low"), v.literal("medium"), v.literal("high"))
  ), // Task priority
  tags: v.optional(v.array(v.string())), // Optional tags for categorization
};

export default defineSchema({
  users: defineTable(User)
    .index("byClerkId", ["clerkId"])
    .searchIndex("searchUsers", {
      searchField: "username",
    }),
  tasks: defineTable(Task),
});
