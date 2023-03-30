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
import { routers } from './routes/index'
import mongoose from 'mongoose';

// console.log(process.env.PORT)
// const result: DotenvConfigOutput = config();
// const portConfig = result.parsed as DotenvParseOutput;
const configService = new ConfigService()
let port = configService.get('PORT')
let dbUrl: string = configService.get('DB_URL')
// const host: string = '127.0.0.1';
// console.log(path)
const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieparser())

app.use('/api', routers);
// определяем Router
console.log(process.pid);
// app.use("/products", function (request, response) {
// 	response.send("Главная страница");
//   });

const start = async () => {
	try {
		await mongoose.connect(dbUrl)
		console.log(`к бд подлючено ${dbUrl} `);
		app.listen(port, () => {
			console.log(`сервер запущен port ${port} `);
		});
		// app.get('/test', function (req, res, next) {
		// 	var html = fs.readFileSync('./html/test.html', 'utf8')
		// 	// res.render('test', { html: html })
		// 	res.send(html)
		// })
	} catch (error) {
		console.log(error);
	}
};

start();
