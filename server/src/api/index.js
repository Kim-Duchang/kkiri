import Router from 'koa-router';
import calendars from './calendars';
import auth from './auth';
import code from './code';
import schedules from './schedules';
import album from './album';
import chat from './chat';
import albums from './album';
import dDay from './dday';

const api = new Router();
api.use('/auth', auth.routes());
api.use('/code', code.routes());
api.use('/calendars', calendars.routes());
api.use('/schedules', schedules.routes());
api.use('/album', album.routes());
api.use('/chat', chat.routes());
api.use('/albums', albums.routes());
api.use('/dday', dDay.routes());

export default api;
