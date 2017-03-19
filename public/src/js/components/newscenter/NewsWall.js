import React, {Component} from "react";
import {Link} from "react-router"
import "../../../css/newscenter/NewsCenter.css";

export default class NewsWall extends Component{
    render(){
        return(

            <div className="newsWrap row">
                <div className="col-md-12">
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>
                    <Link to="/newscenter/admission">
                        <div className="news row">
                            <div className="newsTitle col-md-9">西安邮电大学运动会顺利举办</div>
                            <div className="newsTime col-md-3">2011-06-11</div>
                        </div>
                    </Link>

                </div>
                <div className="foot">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}