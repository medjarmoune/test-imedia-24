import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons, getPokemonsDetails, initialPokemonsDetails} from "../redux/reducer/pokemon";
import {resultType} from "../type/type";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingIndicator from "./Loader/LoadingIndicator";
// @ts-ignore
import Modal from 'react-modal'

function PokemonsListComponent() {
    const dispatch  = useDispatch();
    const pokemonsList = useSelector((state:any) => state.pokemonReducer.pokemonList);
    const pokemonDetails = useSelector((state:any) => state.pokemonReducer.pokemonDetails);
    const loader = useSelector((state:any) => state.pokemonReducer.loaderPokemonDetails);
    const [results, setResults] = useState([]);
    const [offset, setOffest] = useState(0);
    const [item, setItem] = useState<resultType>();
    const [openModal, setOpenModal] = useState(false);

    useEffect(() =>{
            if (pokemonsList?.status){
                // @ts-ignore
                setResults([...results, ...pokemonsList.response.results])
            }
    },[pokemonsList])



    function MyFunction() {
        const makeSomeAction = (item:resultType) => {
            setOpenModal(true);
            setItem(item)
            dispatch(getPokemonsDetails({url:item.url}))
        }

        return (
            <div
                style={{
                    justifyContent:"center",
                    alignItems:"center",
                    display:"grid"
                }}
            >
                {
                    results.map((item:resultType, index:number) =>{
                        return(
                            <div key={index}
                                style={{
                                    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                    transition: '0.3s',
                                    borderRadius: "5px",
                                    margin:5,
                                    padding:10,
                                    alignItems:"center",
                                    justifyContent:"center",
                                    textAlign:"left",
                                    border:'0.5px solid',
                                    cursor:"pointer"
                                }}
                                 className="zoom"
                                 onClick={()=> makeSomeAction(item)}
                            >
                                <li style={{color:'#000', fontFamily:'system-ui'}}>{`name : ${item.name}`}</li>
                                <li style={{color:'#000', fontFamily:'system-ui'}}>{`url : ${item.url}`}</li>
                            </div>
                        )
                    })
                }

            </div>
        )
    }

    useEffect(() =>{
        dispatch(getPokemons({offset, limit:20}))
    },[])
    function FetchData () {
        setOffest(offset+20)
        dispatch(getPokemons({offset, limit:20}))
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height:'50%',
            width:'40%',
            border:"1px solid #d49a30"
        },
    };
    return (
        <div>
            <InfiniteScroll
                dataLength={results.length}
                next={() =>FetchData()}
                hasMore={results.length < 1120}
                loader={
                    <div
                        style={{
                            textAlign: 'center',
                            color:"rgb(125 136 145 / 93%)",
                            fontFamily:"system-ui",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            marginBottom:7,
                            marginTop:7,
                        }}
                    >
                        Loading {<LoadingIndicator/>}
                    </div>
                }
            >
                {
                    MyFunction()
                }

            </InfiniteScroll>
            <Modal
                isOpen={openModal}
                style={customStyles}
                contentLabel="Example Modal"
                onRequestClose={()=>setOpenModal(false)}
                ariaHideApp={false}
            >
                {
                    !loader?<>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h3 >{pokemonDetails?.response?.name}</h3>
                            <svg
                                style={{cursor:"pointer"}}
                                className="zoom" onClick={() => {
                                setOpenModal(false)
                                dispatch(initialPokemonsDetails(''))
                            }}
                                width={25} height={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            >
                                <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"/>
                            </svg>
                        </div>
                        <div>
                            <div style={{justifyContent:"space-between", display:"flex"}}>
                                <img style={{borderRadius:5}} src ={`${pokemonDetails?.response?.sprites?.front_default}`} />
                                <img style={{borderRadius:5}} src ={`${pokemonDetails?.response?.sprites?.front_shiny}`} />
                                <img style={{borderRadius:5}} src ={`${pokemonDetails?.response?.sprites?.back_default}`} />
                            </div>
                            <div style={{fontSize:16, fontFamily:'fantasy'}}>{`name :${pokemonDetails?.response?.name}`}</div>
                            <div style={{fontSize:16, fontFamily:'fantasy'}}>{`base_experience :${pokemonDetails?.response?.base_experience}`}</div>
                            <div style={{fontSize:16, fontFamily:'fantasy'}}>{`height :${pokemonDetails?.response?.height}`}</div>
                            <div style={{fontSize:16, fontFamily:'fantasy'}}>{`weight :${pokemonDetails?.response?.weight}`}</div>
                            <div style={{fontSize:16, fontFamily:'fantasy'}}>{`order :${pokemonDetails?.response?.order}`}</div>
                        </div>
                    </>:<div>loading...</div>
                }
            </Modal>
        </div>
    );
}

export default PokemonsListComponent;
