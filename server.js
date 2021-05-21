const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const apiRouter = require("./api/apiRouter.js");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.use(ken);

server.use("/api", apiRouter);

server.get("/status", (req, res) => {
	res.status(200).send("ok");
});

server.get("/", (req, res) => {
	const { anthony, george, ken, shane, tayler } = req;
	res.status(200).json({ endpoint: req.url, anthony, george, ken, shane, tayler });
});

server.get("/moria", (req, res) => {
	const { anthony, george, ken, shane, tayler } = req;
	res.status(200).json({ endpoint: req.url, anthony, george, ken, shane, tayler });
});

module.exports = server;

function ken(req, res, next) {
	req.ken = "was here";

	next();
}

function errorHandler(err, req, res, next) {}
