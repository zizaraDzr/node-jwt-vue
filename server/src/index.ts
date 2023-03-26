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
import fs from 'fs'
import path from 'path'
import { ConfigService } from './config/config.service';

// console.log(process.env.PORT)
// const result: DotenvConfigOutput = config();
// const portConfig = result.parsed as DotenvParseOutput;
const port: number = +new ConfigService().get('PORT')
// const host: string = '127.0.0.1';
// console.log(path);
console.log(process.pid);


const app = express();

const start = async () => {
	try {
		app.listen(port, () => {
			console.log(`сервер запущен port ${port}: host `);
		});
		app.get('/test', function (req, res, next) {
			var html = fs.readFileSync('./html/test.html', 'utf8')
			// res.render('test', { html: html })
			res.send(html)
		})
	} catch (error) {
		console.log(error);
	}
};

start();
