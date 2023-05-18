import { memo } from 'react';

function Card({ data, children, type, unit }) {
    return (
        <div className='col-5 col-md-2 border border-0 rounded-1 shadow-sm px-0'>
            <div className="card border border-0 rounded-1">
                <div className="card-body text-center text-muted">
                    <span className=' fw-bold'>
                        {children}<br />
                    </span>
                    <span className='data'>
                        {data}{unit}
                    </span><br />
                    <small>{type}</small>
                </div>
            </div>
        </div>
    )
}

export default memo(Card);