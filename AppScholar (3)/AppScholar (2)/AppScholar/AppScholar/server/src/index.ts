import  express from 'express';
import  cors from 'cors';
import  dotenv from "dotenv";
import studentRoutes from './routes/students';
import disciplinaRoutes from './routes/disciplinas';
import professorRoutes from './routes/professores';
import gradesRoutes from './routes/grades';
import courseRoutes from "./routes/course";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);  // CRUD students
app.use('/api/disciplinas', disciplinaRoutes); // CRUD disciplinas
app.use('/api/professores', professorRoutes);  // CRUD professores
app.use('/api/grades', gradesRoutes);     // grades + boletim
app.use("/api/courses", courseRoutes);
app.get('/', (_req, res) => res.send('Servidor App Scholar rodando!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
