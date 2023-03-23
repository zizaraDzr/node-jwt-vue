// import http from 'http';

// const host = '127.0.0.1';
// const port = 8000;

// const server = http.createServer((req, res) => {
// 	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
// 	res.end('<h1>привет!</h1>');
// });

// server.listen(port, host, () => {
// 	console.log(`сервер запущен port ${port}: host ${host}`);
// });

import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';
import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv';

// console.log(process.env.PORT)
const result: DotenvConfigOutput = config();
const portConfig = result.parsed as DotenvParseOutput;
const port: number = +portConfig['PORT'] || 5000;
const host: string = '127.0.0.1';
console.log(result)

const app = express();

const start = async () => {
	try {
		app.listen(port, host, () => {
			console.log(`сервер запущен port ${port}: host ${host}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
