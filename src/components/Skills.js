import React, { Component } from 'react'
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Skills extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             activeTab: 0 
        }
    }
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
                    <h1>This is HTML</h1>
                </div>
            )
        }else if(this.state.activeTab === 1) {
            return(
                <div>
                    <h1>This is CSS</h1>
                </div>
            )
        }else if(this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is JS</h1>
                </div>
            )
        }else if (this.state.activeTab === 3) {
            return(
                <div>
                   <Card shadow = {5} style = {{minWidth: '450', margin : 'auto'}}>
                        <CardTitle style = {{color: '#f86c6b', height: '111px', background: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUIBxEVFRUXFx8XFxcWFRoYGhoYGR4YHiAlGhoeKCgsICMlJB8gIjEhJTUuLi4uISA1ODUwNygtMisBCgoKDg0OGxAQGy0mICYtLS8vLy8tLTUtLTA1LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALABHgMBEQACEQEDEQH/xAAbAAEAAwEAAwAAAAAAAAAAAAAABQYHBAECA//EAEAQAAIBAwEEBwYDBQYHAAAAAAABAgMEEQUGEiExFEFRU2FxkgcTIoGRoSMychVCYoLBFjM0UsLSJCVjo7HR8P/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAtEQEAAgIBAwMCBQQDAAAAAAAAAQIDBBESITEFEyJBURQyYXGBIzNSoRU0kf/aAAwDAQACEQMRAD8Ay/pl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYDpl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYDpl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYDpl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYDpl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYDpl13k/UwHTLrvJ+pgOmXXeT9TAdMuu8n6mA6Zdd5P1MB0y67yfqYHxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATuy2zFztDWbjLcpxeJTxl57IrrePpwLGHBOSf0U9vcrrx95+y0f2K2alPo0LyXvFwa97Sbz+nBZ/C4p7dSh/wAjsx36O37IPXthtS0uDr2341NcW4rE0vGHHPmslfLqWr3jvC3r+o48k8W7SqxWaD3o0atxWVGhFyk3hRistvwR7FZmeIc2tFY5ldNJ9nlxUpe/1mqqS57scOS/VJ8F9y5j05mObzwy83qkRPTijmXb/YfQL1Olpd43US/z06mPOKSZ1+Fx2j4z3RR6jmp3yU7KPrGmXOj38rK8XxLimuUovk14Mp3pNJ4lrYc1MtIvVxnCUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANHvastB9mtONr8M6sYptcHmr8UsPtxlGjf8Ap6/bzLCx19/cnn6M3wsYM5uysuze2OoaNNUqzdWl1xk8yj+iT5eT4eRZxbNqdp7wo7OjjzRzHaVk1nZvT9qLVats9KMZy/MuUZPr3l+7Ndfb9yxfDXNHVRQxbeTVt7eaO30fX/k+wFhnHvbma/ml/sgvv4s94pr1/V5zl3rfaqia3ruoa3V3r6fw9VNcILyj1+byyjky2yT3a2DWx4Y+MOG2uKtncRubZ4nB70Wu1HEWmJ5TXpF69Mr97SYU73RLbVoLi2l/LUjvfZx+7L+3HVSt2P6bM0y3xM9M9tSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGh7YPpHs+ta0OX4T+tNr+poZ55wRP7MTT7bl4n9WeGe231tLate3Mba1i5Tk8RS63/APcT2sTaeIcXvFazaWmqpp/s/wBEjTn+JWqPLSeHNrm12RiuC/8AbNOOjXr+rBmuTey8+Kw49rNGt9pNNW0GiPelu/ElznGPVjqnHjw6+XYcZsUZa9dU2pntr39nJ4ZzzM5tmcAaJtp+BsHa0J880l9KcmaOz/ZrDD0u+3eWdmc3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB70KNW5q+6toSnJ9UYuT+iPYi0z2hza8V8y1K00W91LYGOlXcfdVUsJT6tyeY5xnqNSuK1sHT9Xz99imPb9yveEVR9m0IR3r67x+mCX3k/6EMaXHmy1b1WZ/LRPaPs7o2y29fyqvilH3lWUUkn/lwljPAsUwUxfKZUc21m2fhEODVKWxeqXzu7+6jKbwv7/CSXJJLkiO8YLzzNv9psNt3FTppTt+zq0G52U0VShpt3BKTy4yrqSyutZ5Pq+h3ithp2rb/aPYptZu96/wCnx1XYTSL24ldxqzpb7ziLhuZfYmuvnjJxfVpb5cpMXqWWkdExzwiLn2Z1m821zFx61KDXDr4psjnS+0p49Wjji1eJd/tLsr+6tqNOxoznThvSk4rOHhKPwrjyz1HW3S0xERHaEfpmSkWtNp7yzRpp4fMzm7zz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAALjsvsU76gtQ1mXu6OMqOd2Uo9rb/Kvv5FzDrdXyv4Zm16hFJ9vH3lKXW2Wi6HS6Js5QjPH7y+CGfPnPz+5LbYx4+1IVqaGbN8s0unYjau71rUqlrqO7lx3oKC3eT+JdvWn9TrXzzkvMS43dKmCkWp/KC0jZu4v9r6lpqTlOnQnvSc25by5wXH/ADLDfhkhx4ZtlmLeIW82zSmvFqR3mHy9oWvftLUugWz/AAqTw8cpVFwb8o/lXzONrL1W6Y8Q79P1/bp128yitK2Z1jVqPv7Oi9x8pSain5ZfHzRHTBkt4hYybmHHPFrd3NqukahpNRQ1Gk4Z5Pg4vyksr5HF8dqfmhJhz48v5J5XbYjUKOvaNPZ3VOLjD4c83T8PGDxj5dhd17+5WccsnexTgyRnp/Ll2F0m+tNq6ltXlNRt095KUlGTlwhw5NNZl8kea+O0ZJifok389LYItERzLzqW39/aa7Vp20ac6MZbsU1h/DhNqS7Wm+KfUeX27ReY+hj9Mx2xV588JClqWzG2P4F9D3VZ8It4Us/w1Fwl5P6HcXxZu0xxKGcezqTzWeYVHajZi72frZm9+lJ4jUSxx7JLqf2ZVz4Jx/s0dTbrnjjxKCIFwAAAAAAAAAAAAAAAAAAAAAAAAAEpsrZUtQ2io2twsxcsyXaopyx88YJcFIteIlX2rzTFa0LF7TNXuJ6itJg8U4xUpJcN6T4rPgupdpY3Mk9XTHhR9MwV6Pdt3mVJKPDW+vLs0fUJ6VqlO+p/uSy12x5SXzTZLiv02iUWbHGTHNZa1tbqX7H0Gpe20cTniKeOKlLgnLyXLPXhGrnv0U6oh85pYpy5opbxDKtm7KnqOvUbOv8AllP4vFRTk188Y+Zl4Y5yRE/d9Ds39vDaY+kNxjFRjuxWEuCS6kbcRw+RmZmZmXDrun0dU0mpaV1lOLw+ySWU14pkeWkWrPKfVyTjyxMMT0nUaum31PUKHODUsdq60/NZRi0tNb8w+qy44yVmk/VsGv6ktP2cqapbRe9KEccOOZ4Ud7y3jXyWiuObQ+Z1sU3zxime0MXMWH1QektM2QuZ7S7LVtN1P4tz4FJ8XhrMcvti1z8jSwX9zHMW+jD3KRr563p9WZReY5ZnT5bcd3k8egAAAAAAAAAAAAAAAAAAAAAAAB06be1dO1Cne0PzQkpLx7V81lfM6rbpmJcZaRek1n6tD13SLTbTTo6to0kqqW603jPXuz7Gup8vlxNDLjjPXrr5YeDNfUvOPJ4Zze2dzYXDoXsJQkuqSx9O1eKM61ZrPEtymSt45rKY2H0xaptFCM1mFP8AEl/LjC+csfcm1qdd1beze3hmY+vZo0tQsNoLu62eq84rDfblLLj4wlj5mj1VydVGJGK+vWmf7+WVNXez+t4fCrRqfJ4/pJfZmX3x2/Z9BE1z4u3iYavpG1mkanbqfvY05Y+KFSSi0/DPNeKNXHsUvHl87m0cuO3ERzCJ2v2ysrewlZ6XUVSrNOO9B5jBPg3vcm+xIiz7NYrMV8ys6Xp95vF79ohTdidE/bOtRjUX4VPE59jx+WPzf2TKWti6792pv7Hs4p+8tIhqdhr95daE+KhHdk+3eypY/S8LzNHrrkm2Nh+1fBFMv3Y9d21S0up21ZfFCTi/OLwZFq9M8PpqXi9YtDt0XQtQ1uruWMG49c3whHzl/RcTvHitee0Ic21jxR8pXjU61nsTs49Ns571eonx68yWHNrqSXBLy8WXrzXBTpjyysVL7mb3LflhmiSSwjNluvIAAAAAAAAAAAAAAAAAAAAAAAAAAdmlare6Rc9I0+bi+vrTXZJcmd0yWpPNUWXDTLHFoXa1250vU6HRto7dY7VHfh545x+WS7XapeOMkMq/p2XHPVgt/CybM6ZolpTnfaBxjVws7zkvhzwWeK4vkWMVKR8qqG1lz2tFM30VyhsVrWmautTsa9Oc1Nye9vQ3t5tyTxvc8srxrXrfqrK9b1DDkx+3esu7bvZitrEI32nQzWj8Mo5S3o9XF4WY/wDhkmzgm/yrHdFobtcXNLz2Ul7H7RJ4drL1U/8AcUvwuT7NT8dg/wAntDY3aKT/AMM15zpr/Ue/hsv2Px+D7tD0rRLrQ9mnaaZudIksynJ4jvy4Zzh8Irgl4eJfphnHj4r5YuXYrl2Itf8ALCM2U2MvtF1VahcV4vCkpRjFveUu2Tx14fLqI8Otaluq0p9vfpmx9FKy69esdldP1B6lrSTqVOKjLeknupLKprg+rLZ1lrirbqt5RYMm1kpFKeIQGr+0GbpdH0KkqUeSnJLK/TBcF88+RDfb7cUjhdxel8z1Zp5UmvWq3FZ1q8nKUnlyk8tvxZRmZmeZa1axWOKxxD0PHoAAAAAAAAAAAAAAAAAAAAAAAAAAAABompv9ney2lTp8HUjD/uP3j+2TQv8ADXiGJi4yb0z9uVJtdZ1S0/w1xVj4e8k19HwKfu3jxLWtgx2/NWP/ABaNkttbyGoq31uq5058FJqK3JdTbSXB8nnlz7Szg2rdXFp7M7c9PpOPqxRxKZ211baDQq6ubOcXQlw4003CXY32PqfyJdjLlxzzXwraWHXzR03ji0JDQNR1KlostW2mnGMcb0YqCi1HtfXmXVH+rJcWS8U67odnDjnJGPDChantprV3dyqW9aVKDfwwio8F1ZeM57eJQvs5LTPE8NfD6fhpWImOZQ1zqV/cS369apJ81vTk+Pk2Qze3nla9nHEcREL17TFG60W11CK5yxnwqQ3v9KL23HNK2ZPpvxy3xs8M9tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw+XADRNsvxNgbWdPl+F9PdSNHP3w14/Riafbbvz+rPDObbw8Y4ga5sVDUJbOKnr0VucPd+8/N7vq30/HGM8cYNbBFuj5vmt2ae9/S8/XhB+1Faq6kN9f8MsYcc/3n/U7PDq+ZBudf8AC56V7XE/5qAUGy8PlxA0TbH4PZ/awqc/wl81TkaGz/YhiaX/AG78fqzwz22AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGjbMTt9ptj5aDWko1KawvJPMJJdaX5X5eJo4JjLi6J8sPai2tse9EfGUCtgNfdb3bjTSz+b3ix9Of2IPweTlb/AOTwccrDZbPaJslSV/rlVTqc4prhn+CHOT8Xy8CxXDjw97zzKpfZz7U9OOOIVbaraq62gn7pZhRT4Qz+Z9s31vw5Lx5lXNsWyeO0NDU0q4I5nvKV2Z21VGh+zdoF7ym1uqbW80uya/eXjz8+qXDsxx038Ku16fzPXiniXXqmwltf0+m7NVYbsuKi5Zh/LNZx5M6vqRbvjlxh9Rtj+GaEdpns+1WveRjqKjCnn4mpqTa7IpdvLLxgjpp35+SbL6niik9Pl9vaXq9G5u4aXatONLjLHJTawkn/AArOfPwPdu8c9FfEPPTcNqxOW3mVKKbUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3oVqttWVa3k4yXKUW0180exMx3h5asWji0cwmZbYbQype7dzLzUYJ/XGSX8Rk48qsaOvE89KGr1qtxVdW4lKUnzlJtt/NkU2me8rNaVrHFYeh46AOmw1G906p7ywqzpvr3ZYT81yfzOq3mviUd8VL/mjlI3O1mvXNH3VW5lh8HuqMW/nFJkltjJMccoa6WCs8xVCkPf6rQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcuYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEm3hAf/2Q==) center / cover'}}> 
                        </CardTitle>
                        <CardText style = {{fontWeight: 'bold', color: '#63c2de', textAlign: 'center'}}>
                            My first React Portfolio
                        </CardText>
                        <CardActions border>
                            <Button className = "button-align" style ={{backgroundColor: '#63c2de'}}> 
                            <div>
                                <a  href = "http://github.com/karenbarseghyan" rel="noreferrer" target = "_blank" style = {{textDecoration: 'none'}}>
                                    <p className = "github-link">GutHub</p> 
                                </a>
                            </div>
                            </Button>
                        </CardActions>
                        <CardMenu style = {{color: '#aaa'}}>
                            <IconButton name = "share" />
                        </CardMenu>
                   </Card>
                </div>
            )
        }
    }
    
    render() {
        return (
            <div className = "category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId })} ripple>
                    <Tab>HTML</Tab>
                    <Tab>CSS</Tab>
                    <Tab>JS</Tab>
                    <Tab>ReactJS</Tab>
                </Tabs>
                    <Grid>
                        <Cell col = {12}>
                            <div className = "content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Skills
