import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import logo from "../../assets/logo.svg";
import oleo from "../../assets/oleo.svg";
import baterias from "../../assets/baterias.svg";
import lampadas from "../../assets/lampadas.svg";
import organicos from "../../assets/organicos.svg";
import papeis from "../../assets/papeis-papelao.svg";
import eletronicos from "../../assets/eletronicos.svg";
const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

      <form>
        <h1>
          Cadastro do <br /> Ponto de Coleta
        </h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da Entidade</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no Mapa</span>
          </legend>
          <MapContainer
            center={[41.1593138, -8.6298419]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[41.1593138, -8.6298419]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0">Selecione uma UF</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0">Selecione uma Cidade</option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Ítens de Coleta</h2>
            <span>Selecione um ou mais ítens abaixo</span>
          </legend>

          <ul className="items-grid">
            <li className="selected">
              <img src={oleo} alt="oleo" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src={baterias} alt="baterias" />
              <span>Baterias</span>
            </li>
            <li className="selected">
              <img src={lampadas} alt="lampadas" />
              <span>Lâmpadas</span>
            </li>
            <li>
              <img src={organicos} alt="organicos" />
              <span>Orgânicos</span>
            </li>
            <li>
              <img src={papeis} alt="papeis" />
              <span>Papéis e Papelão</span>
            </li>
            <li>
              <img src={eletronicos} alt="eletronicos" />
              <span>Eletrônicos</span>
            </li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar Ponto de Coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
