--
-- PostgreSQL database dump
--

\restrict fCQG6TxQlxNXRpKLxaar3ctN891696VUjIm3HySGWPokkOcAYV4Qa720QP7Cnqk

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2026-05-09 17:19:44

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16560)
-- Name: aluno; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aluno (
    id integer NOT NULL,
    nome character varying(100),
    status character varying(20)
);


ALTER TABLE public.aluno OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16559)
-- Name: aluno_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.aluno_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.aluno_id_seq OWNER TO postgres;

--
-- TOC entry 5043 (class 0 OID 0)
-- Dependencies: 221
-- Name: aluno_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.aluno_id_seq OWNED BY public.aluno.id;


--
-- TOC entry 226 (class 1259 OID 16579)
-- Name: alunos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.alunos (
    id integer NOT NULL,
    nome character varying(100),
    curso character varying(100),
    semestre integer,
    status character varying(20)
);


ALTER TABLE public.alunos OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16578)
-- Name: alunos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.alunos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.alunos_id_seq OWNER TO postgres;

--
-- TOC entry 5044 (class 0 OID 0)
-- Dependencies: 225
-- Name: alunos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.alunos_id_seq OWNED BY public.alunos.id;


--
-- TOC entry 224 (class 1259 OID 16568)
-- Name: indicadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.indicadores (
    id integer NOT NULL,
    taxa_evasao numeric(5,2),
    alunos_risco integer,
    meta_retencao integer,
    investimento character varying(50)
);


ALTER TABLE public.indicadores OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16567)
-- Name: indicadores_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.indicadores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.indicadores_id_seq OWNER TO postgres;

--
-- TOC entry 5045 (class 0 OID 0)
-- Dependencies: 223
-- Name: indicadores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.indicadores_id_seq OWNED BY public.indicadores.id;


--
-- TOC entry 220 (class 1259 OID 16552)
-- Name: usuario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuario (
    id integer NOT NULL,
    username character varying(50),
    senha character varying(50)
);


ALTER TABLE public.usuario OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16551)
-- Name: usuario_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usuario_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usuario_id_seq OWNER TO postgres;

--
-- TOC entry 5046 (class 0 OID 0)
-- Dependencies: 219
-- Name: usuario_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usuario_id_seq OWNED BY public.usuario.id;


--
-- TOC entry 4872 (class 2604 OID 16563)
-- Name: aluno id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aluno ALTER COLUMN id SET DEFAULT nextval('public.aluno_id_seq'::regclass);


--
-- TOC entry 4874 (class 2604 OID 16582)
-- Name: alunos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos ALTER COLUMN id SET DEFAULT nextval('public.alunos_id_seq'::regclass);


--
-- TOC entry 4873 (class 2604 OID 16571)
-- Name: indicadores id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicadores ALTER COLUMN id SET DEFAULT nextval('public.indicadores_id_seq'::regclass);


--
-- TOC entry 4871 (class 2604 OID 16555)
-- Name: usuario id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario ALTER COLUMN id SET DEFAULT nextval('public.usuario_id_seq'::regclass);


--
-- TOC entry 5033 (class 0 OID 16560)
-- Dependencies: 222
-- Data for Name: aluno; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aluno (id, nome, status) FROM stdin;
1	João	ATIVO
2	Maria	EVADIDO
3	Carlos	ATIVO
\.


--
-- TOC entry 5037 (class 0 OID 16579)
-- Dependencies: 226
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id, nome, curso, semestre, status) FROM stdin;
1	João	ADS	1	ativo
2	Maria	ADS	2	evadido
3	Carlos	SI	3	ativo
4	Ana Silva	Gestão Escolar	\N	ativo
5	Carlos Lima	Pedagogia	\N	evadido
7	Cezar	ADS	\N	ativo
8	Tony	ADS	\N	evadido
\.


--
-- TOC entry 5035 (class 0 OID 16568)
-- Dependencies: 224
-- Data for Name: indicadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.indicadores (id, taxa_evasao, alunos_risco, meta_retencao, investimento) FROM stdin;
1	18.50	452	90	R$ 5-15 mil
\.


--
-- TOC entry 5031 (class 0 OID 16552)
-- Dependencies: 220
-- Data for Name: usuario; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuario (id, username, senha) FROM stdin;
1	admin	123
\.


--
-- TOC entry 5047 (class 0 OID 0)
-- Dependencies: 221
-- Name: aluno_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.aluno_id_seq', 3, true);


--
-- TOC entry 5048 (class 0 OID 0)
-- Dependencies: 225
-- Name: alunos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.alunos_id_seq', 8, true);


--
-- TOC entry 5049 (class 0 OID 0)
-- Dependencies: 223
-- Name: indicadores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.indicadores_id_seq', 1, true);


--
-- TOC entry 5050 (class 0 OID 0)
-- Dependencies: 219
-- Name: usuario_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usuario_id_seq', 1, true);


--
-- TOC entry 4878 (class 2606 OID 16566)
-- Name: aluno aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aluno
    ADD CONSTRAINT aluno_pkey PRIMARY KEY (id);


--
-- TOC entry 4882 (class 2606 OID 16585)
-- Name: alunos alunos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.alunos
    ADD CONSTRAINT alunos_pkey PRIMARY KEY (id);


--
-- TOC entry 4880 (class 2606 OID 16574)
-- Name: indicadores indicadores_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.indicadores
    ADD CONSTRAINT indicadores_pkey PRIMARY KEY (id);


--
-- TOC entry 4876 (class 2606 OID 16558)
-- Name: usuario usuario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id);


-- Completed on 2026-05-09 17:19:44

--
-- PostgreSQL database dump complete
--

\unrestrict fCQG6TxQlxNXRpKLxaar3ctN891696VUjIm3HySGWPokkOcAYV4Qa720QP7Cnqk

