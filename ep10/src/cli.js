#!/usr/bin/env node

/**
 * aaa todo "record the course"
 * aaa discode "hey!"
 */

import { Command } from "commander";
import open from "open";
const program = new Command();
program.name("My CLI").description("jinhyeon CLI");
program
  .command("todo")
  .description("Add a new todo to Things app")
  .argument("<todo>", "todo next to add")
  .option("-t,--today", "is this for today?")
  .action((todo, options) => {
    let url = `things://add?title=${encodeURIComponent(todo)}`;
    if (options.url) {
      url += "&when=today";
    }
    open(url);
  });

program
  .command("discord")
  .description("Send a message to my personal discord server")
  .argument("<message>", "message to send")
  .action((message, options) => {
    console.log("sending message to discord");
  });

program.parse();
