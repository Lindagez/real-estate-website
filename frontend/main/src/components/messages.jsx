import React, { useState, useEffect } from 'react';

export function showLoading(loading) {
  if (loading) {
    return (
      <div className='loader-overlay'>
        <div className='loader mb-2'></div>
        <p className='text-info'>Processing your request ...</p>
      </div>
    );
  }
}

export function showError(error) {
  if (error) {
    return (
      <div className='p-3 mb-2 bg-danger bg-gradient text-white msg w100 c-a'>
        {error}
      </div>
    );
  }
}

export function showSuccess(success) {
  if (success) {
    return (
      <div className='p-3 mb-2 bg-success bg-gradient text-white w100 c-a'>
        {success}
      </div>
    );
  }
}

export function adminError(success) {
  if (success) {
    return (
      <div className='p-3 mb-2 bg-danger bg-gradient text-white position-absolute top-0'>
        {success}
      </div>
    );
  }
}

export function showWarning(warning) {
  if (warning) {
    return (
      <div className='p-3 mb-2 bg-warning bg-gradient text-white w100 c-a'>
        {warning}
      </div>
    );
  }
}
