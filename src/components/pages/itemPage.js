import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error';

class ItemPage extends Component {

    componentDidMount() {
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch(error => this.props.menuError());
    }

    render() {

        const {menuItems, loading, error} = this.props;

        if(loading){
            return <Spinner />
        }

        if (error){
            return <Error/>
        }

        const item = menuItems.filter(item => {
            return item.id === parseInt(this.props.match.params.id);
        });

        const {title, price, url, category} = item[0];

        return (

            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title} />
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <div className="menu__footer">
                    <button className="menu__btn">Add to cart</button>
                </div>
            </li>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
};


export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );